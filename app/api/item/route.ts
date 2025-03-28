import { verifySession } from "@/app/lib/session";
import createClient from "@/utils/supabase/server";
import {
  DeleteObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import { NextResponse } from "next/server";

const awsClient = new S3Client({
  region :process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
})

const bucketName = process.env.AWS_BUCKET_NAME

export async function POST(request : Request){

  const session = await verifySession()
  if(!session?.isAuth) {
    return NextResponse.json({error : 'Unauthorized'}, {status: 400})
  }

  const form = await request.formData()
  const file = form.get("file") as File
  try {
    const parallelUploads3 = new Upload({
      client: awsClient,
      params: { Bucket: bucketName, Key:file.name, Body:file },
      // (optional) concurrency configuration
      queueSize: 4,
      // (optional) size of each part, in bytes, at least 5MB
      partSize: 1024 * 1024 * 5,
      // (optional) when true, do not automatically call AbortMultipartUpload when
      // a multipart upload fails to complete. You should then manually handle
      // the leftover parts.
      leavePartsOnError: false,
    });
  
    parallelUploads3.on("httpUploadProgress", (progress) => {
      console.log(progress);
    });
  
    await parallelUploads3.done();
  } catch {
    // RETURN JSON W/ ERROR IF IMAGE DOESN"T WORK???
    return NextResponse.json({error : 'Error uploading image to AWS'}, {status: 500})
  }
  const imageUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${file.name}`;

  const dbClient = await createClient()
  
  const title = form.get("title") as string
  const category = form.get("category") as string || ""
  const type = form.get("type") as string || ""

  const {error} = await dbClient.from('item').insert([{title: title,image_url:imageUrl, category:category, type: type}]).select()
  if(error){
    console.log(error)
    return NextResponse.json({error : 'Error insterting item to database'}, {status: 500})
  }

  return NextResponse.json({status : "Upload Successful"}, {status: 201})
} 

export async function PUT(request : Request){

  const session = await verifySession()
  if(!session?.isAuth) {
    return NextResponse.json({error : 'Unauthorized'}, {status: 400})
  }
  const form = await request.formData()

  let imageUrl = form.get("image_url") as string
  const bucketName = process.env.AWS_BUCKET_NAME

  // TRY uploading new img if it exists
  try {
    const file = form.get("file") as File
    const parallelUploads3 = new Upload({
      client: awsClient,
      params: { Bucket: bucketName, Key:file.name, Body:file },
      // (optional) concurrency configuration
      queueSize: 4,
      // (optional) size of each part, in bytes, at least 5MB
      partSize: 1024 * 1024 * 5,
      // (optional) when true, do not automatically call AbortMultipartUpload when
      // a multipart upload fails to complete. You should then manually handle
      // the leftover parts.
      leavePartsOnError: false,
    });
  
    parallelUploads3.on("httpUploadProgress", (progress) => {
      console.log(progress);
    });
    imageUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${file.name}`;
  
    await parallelUploads3.done();

  } catch {
    // RETURN JSON W/ ERROR IF IMAGE DOESN"T WORK???
    // return NextResponse.json({error : 'Error uploading image to AWS'}, {status: 500})
  }

  const dbClient = await createClient()
  const id = parseInt(form.get("id") as string)
  const title = form.get("title") as string || ""
  const category = form.get("category") as string || ""
  const type = form.get("type") as string || ""

  await dbClient.from('item').update({title:title, category:category, image_url:imageUrl, type:type}).eq("id",id)

	return NextResponse.json({status : "Item Updated"}, {status:201})
}

// Should also delete from aws but its so cheap that idc
export async function DELETE(request : Request){

  const session = await verifySession()
  if(!session?.isAuth) {
    return NextResponse.json({error : 'Unauthorized'}, {status: 400})
  }

	const { searchParams } = new URL(request.url)
  const idString = searchParams.get("id")
  if (idString){
    const id = parseInt(idString,10)
    const dbClient = await createClient()
    const {data: item} = await dbClient.from('item').select().eq('id',id)
    if(item && item[0].image_url){
      try {
        const splitup = item[0].image_url.split("/")
        const data = await awsClient.send(new DeleteObjectCommand({Bucket : bucketName, Key: splitup[splitup.length - 1]}));
        console.log("Success. Object deleted.", data);
      } catch (err) {
        console.log("Error", err);
      }
    }
    await dbClient.from('item').delete().eq('id',id)
    return NextResponse.json({status : 'Deleted Successfuly'}, {status: 201})
  } else {
    return NextResponse.json({error : 'Missing ID'}, {status: 400})
  }
}

// NEEDS REWRITE!
// Need to taylor this to be better I believe... (will need to handle categories and such?)
export async function GET(request : Request){
	const { searchParams } = new URL(request.url)
	const page = parseInt(searchParams.get("page") || "1", 10)
	const limit = parseInt(searchParams.get("limit") || "5", 10)
	const category = searchParams.get("category") || ""
  const type = searchParams.get("type") || ""
	const offset = (page - 1) * limit

	const dbClient = await createClient()	
  let items
  let err
  if(category) {
    if(type) {
      const {data, error} = await dbClient.from("item").select("*").eq("category",category).eq("type",type).limit(limit).range(offset,offset + limit - 1)
      items = data
      err = error
    } else {
      const {data, error} = await dbClient.from("item").select("*").eq("category",category).limit(limit).range(offset,offset + limit - 1)
      items = data
      err = error
    }
  } else if(type) {
    const {data, error} = await dbClient.from("item").select("*").eq("type",type).limit(limit).range(offset,offset + limit - 1)
    items = data
    err = error
  } else {
    const {data, error} = await dbClient.from("item").select("*").limit(limit).range(offset,offset + limit - 1)
    items = data
    err = error
  }
	// let {data, error} = await dbClient.from("item").select("*").eq("category",category).eq("type",type).limit(limit).range(offset,offset + limit - 1)
  // items = data
  if(err){
    return NextResponse.json({error:err},{status: 500})
  }
	return NextResponse.json({items})
}
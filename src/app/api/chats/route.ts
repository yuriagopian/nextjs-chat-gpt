import { prisma } from "@/app/prisma/prisma";
import { Prisma, PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
  const body = await request.json();
  const chatCreated = await prisma.chat.create({
    data: {
      user_id: '1',
      messages: {
        create: {
          content: body.message
        }
      }
    },
    include: {
      messages: true
    }
  })

  return NextResponse.json(chatCreated)

}
export async function GET(request: NextRequest){
  const chatCreated = await prisma.chat.findMany({
    orderBy: {
      created_at: 'desc'
    }
  })

  return NextResponse.json(chatCreated)

}
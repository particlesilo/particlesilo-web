import { Media } from "@prisma/client";
import { GetStaticProps } from "next/types";
import prisma from "../../../lib/prisma"

interface IResourcesProps {
    feed: Media[]
}

export default function Resources({feed} : IResourcesProps){ 
    return <div className="p-8">
         <p> Resources </p>
            {
                feed.map(media => <div key={media.id}>{media.title} 
                    <p>{media.content}</p>
                </div>)
            }
          </div>
}

export const getStaticProps: GetStaticProps = async () => {
    const feed = await prisma.media.findMany({
      include: {
        author: {
          select: { name: true },
        },
      },
    });
    return {
      props: { feed },
      revalidate: 10,
    };
  };
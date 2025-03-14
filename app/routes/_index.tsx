import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Album } from "~/models/Album";
import { getAllAlbums } from "~/services/albumservice";

export const meta: MetaFunction = () => {
  return [
    { title: "Katrina :: Home" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export function loader(){
    return getAllAlbums();
}

export default function Index() {
  
    const data = useLoaderData<typeof loader>();
    let _albumList: Album[] = [];
    _albumList = data.totalEments;
  
    return (
    <div>
        <h1>index inicial</h1>
    </div>
  );
}

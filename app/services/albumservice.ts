export async function getAllAlbums()
{
    const albums = fetch("http://localhost:5136/api/album/GetAllAlbums");
    return albums;
}

export async function getAlbumById()
{
    return 0;
}

export async function createAlbum()
{
    return 0;
}


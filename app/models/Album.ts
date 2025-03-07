export interface Album{
    id: number;
    name: string;
    year: number;
    genre: string;
    artistId: number;
}

export interface AlbumResponse{
    message: string;
    statusCode: number;
    totalElements: number;
    responseElements: Album[];
}

// public string Name{get; set;} = String.Empty;
// public int Year{get;set;}
// public Genre Genre{get;set;} = Genre.Unknown;
// [ForeignKey("Artist")]
// public int ArtistId{get;set;}
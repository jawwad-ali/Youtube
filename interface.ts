export interface FeedProps {
    videos: {
        id: { videoId: string };
        snippet: {
            channelTitle: string;
            publishedTime: string;
            title: string;
            thumbnails: {
                high: {
                    url: string;
                    width: string;
                    height: string;
                };
            };
        };
    }[];
}

export interface DynamicVideoProps {
    videoDetails: [
        id: string,
        snippet: {
            title: string,
            tags: string[],
            description: string,
            channelTitle: string,
        },
        statistics: {
            viewCount: string,
            likeCount: string,
        },
    ]
}

export interface SuggestionVideos {
    suggestionVideos: [
        id: { videoId: string },
        snippet: {
            title: string,
            tags: string[],
            description: string,
            channelTitle: string,
            thumbnails: {
                high: {
                    url: string;
                    width: string;
                    height: string;
                };
            };
        },
        statistics: {
            viewCount: string,
            likeCount: string,
        },
    ]
}
import youtubeApi from './api';

export async function fetchVideos(options) {
  return youtubeApi.get(
    'search?',
    {
      params: options,
    }
  );
}
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import SpotifyWebApi from 'spotify-web-api-node';

export default async function handler(req, res) {
  // console.log('getAudioPreview.js res', {body: req.body});
  
  const code = req.body?.code || ''
  if(!code.length) return;
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  
  // console.log({clientId, clientSecret});

  const spotifyApi = new SpotifyWebApi({
    clientId: clientId,
    clientSecret: clientSecret
  });
  
  await spotifyApi.clientCredentialsGrant()
    .then(
      function(data){
        console.log('The access token expires in ' + data.body['expires_in']);
        console.log('The access token is ' + data.body['access_token']);

        // Save the access token so that it's used in future calls
        spotifyApi.setAccessToken(data.body['access_token']);
      },
      function(err){
        console.error('fuuuuuck', err);
      }
    );

  const previewTrackURI = await spotifyApi.getTrack(code)
    .then(
      function(data){
        return data.body.preview_url;
      },
      function(err) {
        console.error('dOUBLE fuck!', err);
        return '';
      }
    );
  
  
  res.status(200).json({ previewTrackURI })
}

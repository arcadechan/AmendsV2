import SpotifyWebApi from "spotify-web-api-node";

const AudioPreview = async (props) => {
  console.log('AudioPreview', {props});
  console.log('TrackCode', props.children[0]);
  const trackCode = props.children[0];

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  
  console.log({clientId, clientSecret});

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

  const previewTrack = await spotifyApi.getTrack(trackCode)
    .then(
      function(data){
        return data.body.preview_url;
      },
      function(err) {
        console.error('dOUBLE fuck!', err);
        return '';
      }
    );
  return (
    <p>{previewTrack}</p>
  )
}

export default AudioPreview
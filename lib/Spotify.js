class Spotify {
  constructor(){
    this.CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
    this.CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
    this.API_BASE = process.env.SPOTIFY_API_BASE;

    const headerAuthBasic = `Basic ${new Buffer(`${this.CLIENT_ID}:${this.CLIENT_SECRET}`).toString('base64')}`
    this.HEADERS = {
      'Authorization': headerAuthBasic
    }
  }

  async getAuthToken(){

  }
}

export default Spotify;
import { audiopreview } from '/styles/Post.module.scss'
import axios from 'axios';
import React from 'react'

// const AudioPreview = async ({children}) => {
//   console.log('AudioPreview', children);
//   const code = children[0]

//   // const getAudioPreview = useCallback(async () => {
//   //     return await axios.post('/api/getAudioPreview', { code }, {
//   //       headers: {
//   //         'Accept': 'application/json',
//   //         'Content-Type': 'application/json'
//   //       }
//   //     }).then( response => {
//   //       console.log({response});
//   //       return response;
//   //     });
//   // }, [])

//   // useEffect(() => {
//   //   getAudioPreview()
//   // }, [getAudioPreview])

//   // console.log({getAudioPreview});
//   const getAudioPreview = axios.post('/api/getAudioPreview', { code }, {
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   }).then( response => {
//     console.log(JSON.stringify({response}, null, 2));
//     console.log(response.data)
//     return response.data;
//   });

//   console.log('AudioPreview.js response', {getAudioPreview});

//   return (
//     <div className={`${audiopreview}`}>
//       <audio controls src={getAudioPreview?.previewTrackURI || ''}></audio>
//     </div>
//   )
// }

class AudioPreview extends React.Component {
  state = {
    audiopreview: ''
  };

  constructor(props){
    super(props)
  }

  async componentWillMount(){
    console.log('component will ')
    let code = await this.getAudioPreview(this.props.children[0]);
    this.setState({audiopreview: code.previewTrackURI});
  }

  async getAudioPreview(trackURI){
    return axios.post('/api/getAudioPreview', { code: trackURI }, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then( response => {
          console.log(JSON.stringify({response}, null, 2));
          console.log(response.data)
          return response.data;
        });
  }

  render() {
    console.log('this.props', this.props);
    console.log('this.state', this.state);
    // console.log({state});
    return (
      <div className={`${audiopreview}`}>
        <audio controls src={this.state.audiopreview}></audio>
      </div>
    )
  }
}

export default AudioPreview
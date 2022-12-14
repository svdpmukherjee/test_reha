import React from 'react';
import Video from './Video';
import './Leisure.css';
import ImportVid from './vids/ImportVid.js';

const Leisure = () => {
  return (
    <div className="Leisure">
      <div className="video__app">
        <Video
          src={
            'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
          }
        />
        <Video
          src={
            'https://media.githubusercontent.com/media/svdpmukherjee/test_reha/master/src/Components/vids/vid1.mp4'
          }
        />
        <Video
          src={
            'https://media.githubusercontent.com/media/svdpmukherjee/test_reha/master/src/Components/vids/vid3.mp4'
          }
        />
        {/* <Video
          src={
            importVid[]'
          }
        />
        <Video
          src={
            'https://media.githubusercontent.com/media/svdpmukherjee/test_reha/master/src/Components/vids/vid3.mp4'
          }
        />
        <Video
          src={
            'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
          }
        /> */}
        {/* <Video src={ImportVid[50]} />
        <Video src={ImportVid[30]} />
        <Video src={ImportVid[12]} />
        <Video src={ImportVid[7]} />
        <Video src={ImportVid[33]} />
        <Video src={ImportVid[32]} />
        <Video src={ImportVid[60]} />
        <Video src={ImportVid[17]} />
        <Video src={ImportVid[54]} />
        <Video src={ImportVid[4]} />
        <Video src={ImportVid[52]} />
        <Video src={ImportVid[25]} />
        <Video src={ImportVid[24]} />
        <Video src={ImportVid[53]} />
        <Video src={ImportVid[27]} />
        <Video src={ImportVid[46]} />
        <Video src={ImportVid[55]} />
        <Video src={ImportVid[26]} />
        <Video src={ImportVid[28]} />
        <Video src={ImportVid[36]} />
        <Video src={ImportVid[42]} />
        <Video src={ImportVid[0]} />
        <Video src={ImportVid[29]} />
        <Video src={ImportVid[18]} />
        <Video src={ImportVid[13]} />
        <Video src={ImportVid[56]} />
        <Video src={ImportVid[40]} />
        <Video src={ImportVid[23]} />
        <Video src={ImportVid[3]} />
        <Video src={ImportVid[2]} />
        <Video src={ImportVid[48]} />
        <Video src={ImportVid[1]} />
        <Video src={ImportVid[38]} />
        <Video src={ImportVid[44]} />
        <Video src={ImportVid[59]} />
        <Video src={ImportVid[31]} />
        <Video src={ImportVid[37]} />
        <Video src={ImportVid[9]} />
        <Video src={ImportVid[20]} />
        <Video src={ImportVid[10]} />
        <Video src={ImportVid[14]} />
        <Video src={ImportVid[49]} />
        <Video src={ImportVid[39]} />
        <Video src={ImportVid[47]} />
        <Video src={ImportVid[19]} />
        <Video src={ImportVid[22]} />
        <Video src={ImportVid[64]} />
        <Video src={ImportVid[41]} />
        <Video src={ImportVid[21]} />
        <Video src={ImportVid[57]} />
        <Video src={ImportVid[15]} />
        <Video src={ImportVid[43]} />
        <Video src={ImportVid[45]} />
        <Video src={ImportVid[61]} />
        <Video src={ImportVid[58]} />
        <Video src={ImportVid[65]} />
        <Video src={ImportVid[35]} />
        <Video src={ImportVid[16]} />
        <Video src={ImportVid[6]} />
        <Video src={ImportVid[63]} />
        <Video src={ImportVid[34]} />
        <Video src={ImportVid[5]} />
        <Video src={ImportVid[51]} />
        <Video src={ImportVid[8]} />
        <Video src={ImportVid[62]} />
        <Video src={ImportVid[11]} /> */}
      </div>
    </div>
  );
};

export default Leisure;

import {useState, useEffect} from "react";
import ViewContacts from './viewcontacts.js';
import calendar from './icons/cal.png';
import photo from './icons/photo.png';
import weather from './icons/weather.png';
import contacts from './icons/contacts.png';
import maps from './icons/maps.png';
import messages from './icons/messages.png';
import store from './icons/store.png';
import camera from './icons/camera.png';

const MyApps = () => {
    const [showApp, setShowApp] = useState(localStorage.getItem('SHOW_APP') === 'true');
    const handleApp = () => {
        setShowApp(showApp => !showApp);
    }

    useEffect(() => {
        console.log('showApp', showApp);
        localStorage.setItem('SHOW_APP', JSON.stringify(showApp));
    }, [showApp])
    
    return (showApp === true ? (
        <>
            <h1>Hello</h1>
            <ViewContacts />
            <button type="button" onClick={() => {handleApp()}}>Return</button>
        </>
    ) : (
        <div className="all-apps">
        <span className="app">
          <img src={calendar} alt="calendar" />
        </span>
        <span className="app">
          <img src={photo} alt="photos" />
        </span>
        <span className="app">
          <a href=""><img src={weather} alt="weather"/></a>
        </span>
        <span className="app">
          <a href=""><img src={contacts} alt="contacts" onClick={() => handleApp()}/></a>
        </span>
        <br/>
        <span className="app">
          <a href=""><img src={maps} alt="maps"/></a>
        </span>
        <span className="app">
          <a href=""><img src={messages} alt="messages"/></a>
        </span>
        <span className="app">
          <a href=""><img src={store} alt="store"/></a>
        </span>
        <span className="app">
          <a href=""><img src={camera} alt="camera"/></a>
        </span>
      </div>
    ));
}

export default MyApps;
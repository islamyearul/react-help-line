Iframe Style
<iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.501660642948!2d90.41378741498094!3d23.72948378459968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b859989fd797%3A0xf234fc70cefb96ab!2sIslam%20Chamber%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1646117631841!5m2!1sen!2sbd"
             width="100%" 
             height="450" 
             frameBorder="0"
             style={{ border: 0 }}
             allowfullscreen="" 
             aria-hidden="false"
             tabIndex="0"
             ></iframe>
=================
Using Api

npm install @googlemaps/react-wrapper
import { Wrapper, Status } from "@googlemaps/react-wrapper";
===========
<Wrapper apiKey={"YOUR_API_KEY"}>
  <Map center={center} zoom={zoom}>
    <Marker position={position} />
  </Map>
</Wrapper>
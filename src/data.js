// import images
import Logo from '../src/img/header/logo.svg';
import GalleryImg1 from '../src/img/gallery/1.png';
import GalleryImg2 from '../src/img/gallery/2.png';
import GalleryImg3 from '../src/img/gallery/3.png';
import GalleryImg4 from '../src/img/gallery/4.png';
import GalleryImg5 from '../src/img/gallery/5.png';
import GalleryImg6 from '../src/img/gallery/6.png';
import GalleryImg7 from '../src/img/gallery/7.png';
import GalleryImg8 from '../src/img/gallery/8.png';
import QuoteImg from '../src/img/testimonial/quote.svg';
// import icons
import { GrFacebookOption } from 'react-icons/gr';
import { IoLogoWhatsapp, IoMdArrowForward } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import {
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoTwitter,
  IoLogoYoutube,
} from 'react-icons/io';

export const headerData = {
  logo: Logo,
};

export const navData = {
  items: [
    //{ href: '/', name: 'Home' },
    { href: '#about', name: 'About' },
    { href: '#galeria', name: 'Galeria' },
   // { href: '/', name: 'Interview' },
   //{ href: '/', name: 'Articles' },
    { href: '#contacto', name: 'Contacto' },
  ],
};

export const socialData = [
  //{ href: '/', icon: <GrFacebookOption /> },
  { href: 'https://instagram.com/soul.plqr', icon: <IoLogoInstagram /> },
  //{ href: '/', icon: <IoLogoPinterest /> },
  { href: '/', icon: <IoLogoTwitter /> },
  { href: '/', icon: <IoLogoYoutube /> },
  { href: 'https://api.whatsapp.com/message/AE4HOW7JMQEMG1?autoload=1&app_absent=0', icon: <IoLogoWhatsapp /> }
];

export const heroData = {
  title: 'SOUL PELUQUERIA',
  subtitle:
    'Los peinados tienen su propio poder y magia únicos. No sólo embellecen la cara sino también el autoestima.',
  btnText: 'Mas informacion',
  btnIcon: <IoMdArrowForward />,
};

export const aboutData = {
  title: 'sobre soul',
  subtitle1:
    'In velit arcu posuere integer. Dolor sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus hac vel ante sit sed scelerisque praesent duis volutpat laoreet.',
  subtitle2:
    'Nisl, sit molestie commodo congue. Etiam lectus risus in amet. Commodo molestie fames etiam aenean sed. Pellentesque et venenatis amet, tellus hac vel adipiscing sit. Placerat vitae nisl viverra faucibus tincidunt habitasse amet. Nunc, velit nunc, scelerisque imperdiet nunc.',
  btnText: 'mas informacion',
  btnIcon: <IoMdArrowForward />,
};

export const galleryData = {
  title: 'Visita mi galeria:',
  btnText: 'Ver más',
  btnIcon: <IoMdArrowForward />,
  images: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg6,
      original: GalleryImg6,
      width: 464,
      height: 412,
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg8,
      original: GalleryImg8,
      width: 465,
      height: 412,
    },
  ],
};

export const interviewData = {
  title:
    '“Consider what you desire. Your tattoo artist will never tell you what tattoo to have.”',
  btnText: 'Watch it now',
  btnIcon: <FaPlay />,
};

export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message:
      "The entire team is extremely kind and friendly. They're fantastic. They're great at what they do! And it's unique.They will properly consult with you.",
    name: 'Jack Geoffrey',
    occupation: 'Tattoo Artist',
  },
  {
    quoteImg: QuoteImg,
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa asperiores officia natus dignissimos autem possimus molestias aperiam?',
    name: 'Douglas Hane',
    occupation: 'Tattoo Artist',
  },
];

export const contactData = {
  title: 'Contacto:',
  info: [
    {
      title: 'Soul Villa Mitre',
      subtitle:
        'Peluquería - Barbería',
      address: {
        icon: <FaMapMarkerAlt />,
        name: '•  Washington 169, Bahia Blanca, Buenos Aires',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: ' +54 2914320409',
      },
      email: {
        icon: <FaEnvelope />,
        address: '• leandrobarrientos@gmail.com',
      },
      link: '',
    }/*,
    {
      title: 'NYC office',
      subtitle:
        'Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus',
      address: {
        icon: <FaMapMarkerAlt />,
        name: '1630 Elm Drive, New York City',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+49 34 36573355',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'contact@yourcompany.com',
      },
      link: 'Get location',
    },*/
  ],
  program: {
    title: 'Horario de Atencion:',
    items: [
      { name: 'Martes - Viernes / 10:00am - 7:00pm' },
      { name: 'Sabado / 10:00am - 4:00pm' },
      { name: 'Domingo y Lunes - Cerrado' },
    ],}
}
;
export const footerData = {
  aboutCreator: {
    title: 'Creado Por',
    subtitle:
      'Ulises Moreyra ',
    phone: {
      icon: <FaPhoneAlt />,
      number: '+54 2914187213',
    },
    email: {
      icon: <FaEnvelope />,
      address: 'ulisesfmoreyra@gmail.com',
    },
  },
  links: {
    title: 'Links Utiles',
    items: [
      { href: '#about', name: 'About me' },
      { href: '#galeria', name: 'Galeria' },
      { href: '#contacto', name: 'Contacto' },
    ]
    ,
  }};
  

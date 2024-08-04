

// src/components/HomePage.js
import { Slide } from 'react-awesome-reveal';
import './Footer_common.jsx';
import Footerr from "./Footer_common.jsx";
import './HomePage.css';
import Section from './Section';

const sections = [
  {
    id: 'home',
    title: 'Home', // Add title
    imageFirst: true,
    imageUrl: 'https://demo-source.imgix.net/house.jpg?auto=compress&cs=tinysrgb&h=350',
    content: `Welcome to ConnectIt, the ultimate platform for students to connect, share ideas, and collaborate.
     Our secure user authentication system ensures that only authorized users can access and interact on the site. 
     Dive into blog posts, engage in meaningful conversations, and build your network of friends.
      Explore features tailored to enhance your college experience and stay connected with peers who share your interests.
      Build and expand your network by connecting with other students on ConnectIt. 
      The friends network feature enables you to add friends, view their profiles, and interact with them.
       Stay connected with your peers, share updates, and strengthen your relationships within the college community.`,
  },
  {
    id: 'about',
    title: 'About', // Add title
    imageFirst: false,
    imageUrl: 'https://demo-source.imgix.net/group_photo.jpg?auto=compress&cs=tinysrgb&h=350',
    content: `ConnectIt is designed to foster a vibrant community of students. Our platform offers a space where you can publish blog posts,
    comment on topics, and engage in private messaging with friends.With advanced search and filter functionalities, finding relevant content and connecting with like-minded individuals has never been easier. 
    At ConnectIt, we believe in the power of connections and strive to make your college life more interactive and engaging.Our messaging system allows students to communicate privately with each other. 
    Send messages, share ideas, and collaborate with your peers effortlessly. The chat feature is designed to foster direct and meaningful conversations, 
    making it easy to stay connected with friends and fellow students within the platform.`,
  },
  {
    id: 'contact',
    title: 'Contact', // Add title
    imageFirst: true,
    imageUrl: 'https://demo-source.imgix.net/mountains.jpg?auto=compress&cs=tinysrgb&h=350',
    content: `Have questions or need assistance? Reach out to the ConnectIt support team.
     We are here to help you with any queries or issues you may have. 
     Whether it's about user registration, blog post creation, or navigating the messaging system, our support team is ready to assist you. 
    Contact us via email at support@connectit.com or fill out the form below to get in touch.`,
  },
  {
    id: 'blog',
    title: 'Blog', // Add title
    imageFirst: false,
    imageUrl: 'https://demo-source.imgix.net/head_shot.jpg?auto=compress&cs=tinysrgb&h=350',
    content: `Explore a variety of blog posts created by students just like you. Share your own experiences, insights, and ideas by publishing your blog posts. 
    Engage with others by commenting on their posts and sparking discussions. Our blog section is the heart of ConnectIt, where knowledge and ideas flow freely.
     Stay updated with the latest trends and topics within your college community.Efficiently find relevant blog posts and connect with other students using our advanced search and filter functionalities.
     Whether you are looking for posts on specific topics or trying to find peers from the same college, our search tools make it easy. 
     Tailor your search results to suit your interests and connect with like-minded individuals seamlessly.`,
  },
];

const RaghavPart = () => {
  return (
    <div className="homepage">
    {sections.map((section, index) => (
        <Slide key={index} bottom>
          <div id={section.id}> {/* Add id to the section wrapper */}
            <Section {...section} />
          </div>
        </Slide>
      ))}
    <Footerr/>
    </div>
  );
};

export default RaghavPart;

import React, { Component, Fragment } from "react";
import NavBar from "./NavBar";
import Post from "./Post";
import PostHeader from "./PostHeader";
// import { Container } from './styles';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: "Luiz Fernando",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80/",
        time: "A 2 mins",
        body:
          "Lorem ipsum dolor amet four loko kogi locavore, chillwave chicharrones gastropub williamsburg stumptown 8-bit. Bitters drinking vinegar VHS lo-fi taxidermy you probably haven't heard of them, XOXO put a bird on i kickstarter prism literally 3 wolf moon vexillologist waistcoat poke. Narwhal brunch kombucha austin. Tousled austin bitters cliche, franzen kale chips cardigan fashion axe ennui man braid listicle. Cronut pitchfork organic hammock vice chillwave meh truffaut chartreuse."
      },
      {
        id: 2,
        name: "Amelia Tereza",
        avatar:
          "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1072&q=80",
        time: "A 30 mins",
        body:
          "Lorem ipsum dolor amet four loko kogi locavore, chillwave chicharrones gastropub williamsburg stumptown 8-bit. Bitters drinking vinegar VHS lo-fi taxidermy you probably haven't heard of them, XOXO put a bird on i kickstarter prism literally 3 wolf moon vexillologist waistcoat poke. Narwhal brunch kombucha austin. Tousled austin bitters cliche, franzen kale chips cardigan fashion axe ennui man braid listicle. Cronut pitchfork organic hammock vice chillwave meh truffaut chartreuse."
      },
      {
        id: 3,
        name: "Lucia Costa",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        time: "A 1 hora",
        body:
          "Lorem ipsum dolor amet four loko kogi locavore, chillwave chicharrones gastropub williamsburg stumptown 8-bit. Bitters drinking vinegar VHS lo-fi taxidermy you probably haven't heard of them, XOXO put a bird on i kickstarter prism literally 3 wolf moon vexillologist waistcoat poke. Narwhal brunch kombucha austin. Tousled austin bitters cliche, franzen kale chips cardigan fashion axe ennui man braid listicle. Cronut pitchfork organic hammock vice chillwave meh truffaut chartreuse."
      }
    ]
  };
  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <NavBar />
        <div className="post-container">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}>
        </div>
      </Fragment>
    );
  }
}

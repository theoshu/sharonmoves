import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Script from 'react-load-script';
import sharonBall from '../img/sharon-ball.jpg';

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <section className='section'>
        <Script
          onLoad={this.handleScriptLoad.bind(this)}
          url='https://identity.netlify.com/v1/netlify-identity-widget.js'
        />
        <div className='container'>
          <div className='columns is-desktop'>
            <div className='content column is-one-third'>
              <img alt='sharon ball' src={sharonBall} style={{ width: '100%' }} />
            </div>
            <div className='content column is-two-thirds'>
              <h1 className='is-size-2'>
                Home
              </h1>
              <p>Sharon Moves is an exciting new pilates studio in Houston’s historic Heights neighborhood. Owner Sharon Stinson is a certified, experienced instructor ready to help you achieve your fitness goals and a balanced life. Ready to get moving? Contact us now to schedule a private or duet pilates session.</p>
              <h1 className='is-size-2'>Blog Entries</h1>
              {posts.filter(post => post.node.frontmatter.templateKey === 'blog-post').map(({ node: post }) => {
                return (
                  <div className='content blog-summary' key={post.id}>
                    <p>
                      <Link className='has-text-primary' to={post.frontmatter.path}>
                        {post.frontmatter.title}
                      </Link>
                      <span> &bull; </span>
                      <small>{post.frontmatter.date}</small>
                    </p>
                    <p>
                      {post.excerpt}
                      <br />
                      <br />
                      <Link className='button is-small' to={post.frontmatter.path}>
                        Keep Reading →
                      </Link>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;

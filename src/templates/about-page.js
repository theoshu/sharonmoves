import React from 'react';
import Content, { HTMLContent } from '../components/Content';

export const AboutPageTemplate = ({ image, title, heading, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  return (<section className='section section--gradient'>
    <div className='container'>
      <div className='section'>
        <div className='columns'>
          <div className='column is-10 is-offset-1'>
            <div className='content'>
              <div
                className='full-width-image-container margin-top-0'
                style={{ backgroundImage: `url(${image})` }}
              >
                <h2
                  className='has-text-weight-bold is-size-1'
                  style={{
                    boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                    backgroundColor: '#f40',
                    color: 'white',
                    padding: '1rem'
                  }}
                >
                  {title}
                </h2>
              </div>
              <div className='columns'>
                <div className='column is-7'>
                  <PageContent className='content' content={content} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>);
};

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <AboutPageTemplate
      content={post.html}
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
    />
  );
};

export const aboutPageQuery = graphql`
  query AboutPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        image
        title
      }
    }
  }
`;

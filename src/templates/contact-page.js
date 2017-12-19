import React from 'react';
import Content, { HTMLContent } from '../components/Content';

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const netlifyAttr = { 'data-netlify': 'true' };
  const PageContent = contentComponent || Content;
  return (<section className='section section--gradient'>
    <div className='container'>
      <div className='columns'>
        <div className='column is-10 is-offset-1'>
          <div className='section'>
            <h2 className='title is-size-3 has-text-weight-bold is-bold-light'>{title}</h2>
            <PageContent className='content' content={content} />
            <form name='contact' {...netlifyAttr}>
              <div className='field'>
                <label className='label' htmlFor='first-name'>First Name</label>
                <div className='control'>
                  <input className='input' id='first-name' name='first-name' placeholder='First name' type='text'/>
                </div>
              </div>
              <div className='field'>
                <label className='label' htmlFor='last-name'>Last Name</label>
                <div className='control'>
                  <input className='input' id='last-name' name='last-name' placeholder='Last name' type='text' />
                </div>
              </div>
              <div className='field'>
                <label className='label' htmlFor='email'>Email</label>
                <div className='control'>
                  <input className='input' id='email' name='email' placeholder='hello@' type='email'/>
                </div>
              </div>
              <div className='field'>
                <label className='label' htmlFor='message'>Message</label>
                <div className='control'>
                  <textarea className='textarea' id='message' name='message' placeholder='Textarea'></textarea>
                </div>
              </div>
              <div className='field'>
                <div className='control'>
                  <button className='button is-link'>Submit</button>
                </div>
              </div>
            </form>
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
  query ContactPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;

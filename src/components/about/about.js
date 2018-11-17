import React from 'react';
import jenniferpic from '../../../assets/jenniferpic.jpg';
import carapic from '../../../assets/caraface.jpg';
import collinpic from '../../../assets/collinpic.jpg';
import wyattpic from '../../../assets/wyattpic.jpg';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <section className='aboutpage'>
        <article className='bio'>
          <h2>
            Collin Meredith
          </h2>
          <img src={collinpic} />
          <p className="about">Collin is a software developer and musician. Visit him on <a href="https://github.com/melody2m">Github</a>  or
          <a href="https://www.youtube.com/channel/UCTKy4hA0oaEmn9LYmv8kKsw"> YouTube</a></p>
        </article>
        <article className='bio'>
        <h2>
          Cara Ottmar
        </h2>
        <img className="right" src={carapic} />
        <p className="about">
          Cara hails from The Ozark Mountains, which are not even mountains at all.
          When not hiking actual mountains in the PNW, you can find her traveling,
          watching The Amazing Race cuddled with her 3 and 4 legged rescue dogs,
          or playing a mean game of team trivia.
        </p>
        </article>
        <article className='bio'>
        <h2>
          Jennifer Piper
        </h2>
        <img src={jenniferpic} />
        <p className="about">
          Jennifer is a web developer with full-stack skills and a passion for front-end excellence.
          She loves how good code and good design fit together to make great user experiences!
        <br />
          <a href="https://www.linkedin.com/in/jennifer-piper/">LinkedIn</a>  and
        <a href="https://www.github.com/jenwill"> GitHub</a>
          <br />
        </p>
        </article>
        <article className='bio'>
        <h2>
          Wyatt Pefley
        </h2>
        <img className="right" src={wyattpic} />
        <p className="about">
          Wyatt is a full-stack JavaScript developer from Montana.
          When he is not coding he likes to make music, go to concerts and festivals,
          snowboard, and enjoy a pint of Guinness.
        </p>
        </article>
      </section>
    );
  }
}
export default About;

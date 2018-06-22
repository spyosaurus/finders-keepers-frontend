import React from 'react';


class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }  

  render() {
    return (
      <div>
        <h2>
          Collin Meredith
        </h2>
        <p>Collin is a software developer and musician. Visit him on <a href="https://github.com/melody2m">Github</a>  or <a href="https://www.youtube.com/channel/UCTKy4hA0oaEmn9LYmv8kKsw">YouTube</a></p>
        <h2>
          Cara Ottmar
        </h2>
        <p>
          Cara Ottmar hails from The Ozark Mountains, which are not even mountains at all.
          When not hiking actual mountains in the PNW, you can find her traveling, 
          watching The Amazing Race cuddled with her 3 and 4 legged rescue dogs,
          or playing a mean game of team trivia.
        </p>
        <h2>
          Jennifer Piper
        </h2>
        <p>
          BIOBIOBIOBIOBIOBIOBIOBIOBIOBIOBIOBIOBIOBIOBIO
        </p>
        <h2>
          Wyatt Pefley
        </h2>
        <p>
         Wyatt is a full-stack JavaScript developer from Montana. 
         When he is not coding he like to make music, go to concerts and festivals, 
         snowboard, and enjoy a pint of Guiness.
        </p>
      </div>
    );  
  }
}
export default About;

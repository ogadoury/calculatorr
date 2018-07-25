import React, { Component } from 'react';
import './views/base.css';
import { Button } from './components/button';

// class App extends Component {
//   render() {
//     return (
//       <div id="calculator">
//         <div id="output"></div>
//         <div id="buttons">
//           <div class="row">
//             <div class="cell sm">AC</div>
//             <div class="cell sm">+/-</div>
//             <div class="cell sm">%</div>
//             <div class="cell sm">÷</div>
//           </div>
//           <div class="row">
//             <div class="cell sm">7</div>
//             <div class="cell sm">8</div>
//             <div class="cell sm">9</div>
//             <div class="cell sm">x</div>
//           </div>
//           <div class="row">
//             <div class="cell sm">4</div>
//             <div class="cell sm">5</div>
//             <div class="cell sm">6</div>
//             <div class="cell sm">-</div>
//           </div>
//           <div class="row">
//             <div class="cell sm">1</div>
//             <div class="cell sm">2</div>
//             <div class="cell sm">3</div>
//             <div class="cell sm">+</div>
//           </div>
//           <div class="row">
//             <div class="cell md">0</div>
//             <div class="cell sm">.</div>
//             <div class="cell sm">=</div>
//           </div>
//         </div>
//     </div>
//     );
//   }
// }

class App extends Component {
  render() {
    return <Button />
  }
}

export default App;

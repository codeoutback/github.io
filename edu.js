'use strict';

const e6 = React.createElement;

class EduDrpDwn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: true };
  }

  render() {
    if (this.state.liked) {
        <select name="selecEdu" id="selecEdu">
              <option value="associates">Associates degree</option>
              <option value="bachelors">Bachelors degree</option>
              </select>
    }

    return e4(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'My Projects'
    );
  }
}
const domContainer4 = document.querySelector('#projects_button_container');
ReactDOM.render(e4(ProjectsButton), domContainer4);




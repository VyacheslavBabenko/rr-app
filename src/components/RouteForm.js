import React from "react";
import { connect } from "react-redux";
import { createRoute, showAlert } from "../redux/actions";
import { Alert } from "./Alert";

class RouteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      route: ""
    };
  }

  submitHandler = event => {
    event.preventDefault();
    const pathname = window.location.pathname;

    const { title } = this.state;
    const { route } = this.state;

    if (!title.trim() || !route.trim()) {
      return this.props.showAlert("Заполните все поля.");
    }

    const newRoute = {
      title,
      route: pathname + "/" + this.deleteSlash(route),
      id: Date.now().toString()
    };

    this.props.createRoute(newRoute);

    this.setState({
      title: "",
      route: ""
    });
  };

  deleteSlash = str => {
    return str.replace("/", "");
  };

  changeInputHandler = event => {
    event.persist();

    this.setState(prev => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value
      }
    }));
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6">
            {this.props.alert && <Alert text={this.props.alert} />}
            <form onSubmit={this.submitHandler}>
              <div className="form-group">
                <label htmlFor="route">Route</label>
                <input
                  type="text"
                  className="form-control"
                  id="route"
                  value={this.state.route}
                  name="route"
                  onChange={this.changeInputHandler}
                />
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={this.state.title}
                  name="title"
                  onChange={this.changeInputHandler}
                />
              </div>
              <button className="btn btn-success" type="submit">
                Создать
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  createRoute,
  showAlert
};

const mapStateToProps = state => ({
  alert: state.app.alert
});

export default connect(mapStateToProps, mapDispatchToProps)(RouteForm);

import React, { Component } from "react";
import { connect } from "react-redux";
import { spotCreate } from "../actions";
import { Card, CardSection, Button } from "./common";
import SpotForm from "./SpotForm";

class SpotCreate extends Component {
  onButtonPress() {
    const { name, location, description, photos } = this.props;

    this.props.spotCreate({ name, description, photos, location });
  }

  render() {
    return (
      <Card>
        <SpotForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, location, description, photos } = state.spotToPost;

  return { name, location, description, photos };
};

export default connect(mapStateToProps, { spotCreate })(SpotCreate);

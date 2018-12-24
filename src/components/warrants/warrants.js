import React, { Component, Fragment } from "react";
import CategoryPage from "../category-page/category-page";
import ArrestWarrantForm from "./arrest_warrants/arrest_warrant_form";
import SearchWarrantForm from "./search_warrants/search_warrant_form";
const formItems = [
  { text: "SEARCH WARRANT", id: "searchWarrant", form: SearchWarrantForm },
  { text: "ARREST WARRANT", id: "arrestWarrant", form: ArrestWarrantForm }
];

class Warrants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFormID: null
    };
    this.changeActiveForm = this.changeActiveForm.bind(this);
  }
  changeActiveForm(e, newActiveFormID) {
    this.setState({ activeFormID: newActiveFormID });
  }
  render() {
    return (
      <Fragment>
        <CategoryPage
          pageTitle={"WARRANTS"}
          pageForms={formItems}
          changeActiveForm={(e, newActiveFormID) =>
            this.changeActiveForm(e, newActiveFormID)
          }
        />
        {formItems.map(formItem => {
          if (formItem.id == this.state.activeFormID) {
            return <formItem.form key={formItem.id} />;
          }
        })}
      </Fragment>
    );
  }
}

export default Warrants;
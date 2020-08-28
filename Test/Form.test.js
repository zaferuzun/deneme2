import assert from 'assert';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Form from '../src/Form/Form';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';

import Adapter from'enzyme-adapter-react-16';
 configure({adapter: new Adapter()});

//<Form Component Testleri />

const formWrapper = shallow(<Form />);

//div içinde 2 element bulunmalıdır.
describe('< Form Componentini />', () => {

  expect(formWrapper.find('div').children()).to.have.lengthOf(2);

  // 1 adet Button componenti bulunmalıdır.
  it('Button elementi bulunmaktadır', () => 
  {
    expect(formWrapper.find("button")).to.have.lengthOf(1);

  });
  // 1 adet List componenti bulunmalıdır.
  it('Input elementi bulunmaktadır', () => 
  {
    expect(formWrapper.find("input")).to.have.lengthOf(1);
  });       

});

//div içinde 2 element bulunmalıdır.
describe('< Form Componentini state işlemleri />', () => {

  /*formWrapper.setState({ definations:"formdenemestate" });
  it('Form componentte definations elemanı olmalı', () => 
  {
    assert.equal(formWrapper.state().definations,"formdenemestate");
  });*/

  //assert.equal(formWrapper.find("input").text(),"formdenemestate");
  formWrapper.find('input').simulate("change", { target: { value: "formdenemestate" }})

  assert.equal(formWrapper.state().definations,"formdenemestate");
  //console.log(formWrapper.state().definations);

});
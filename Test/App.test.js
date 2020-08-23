import assert from 'assert';
import * as React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App/App';
import Form from '../src/Form/Form';
import { expect } from 'chai';
import List from '../src/List/List';


import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme';

import Adapter from'enzyme-adapter-react-16';
 configure({adapter: new Adapter()});

 //<App Component Testleri />


//div içinde 2 element bulunmalıdır.
describe('<App Componentini />', () => {
  // 1 adet Form componenti bulunmalıdır.

  const appWrapper = shallow(<App />);

  expect(appWrapper.find('div').children()).to.have.lengthOf(2);

  it('Form elementi bulunmaktadır', () => 
  {
    expect(appWrapper.find(Form)).to.have.lengthOf(1);

  });
  // 1 adet List componenti bulunmalıdır.
  it('List elementi bulunmaktadır', () => 
  {
    expect(appWrapper.find(List)).to.have.lengthOf(1);
  }); 

  it('listArray state nesnesi arraydır ', () => 
  {
    assert.equal(appWrapper.state().listArray.constructor.name,"Array");
  });     

  it('listArray 0.elemanının içerisinde definations degişkeni bulunur.', () => 
  {
    assert.equal(appWrapper.state().listArray[0].definations,"açıklama");
  });      
  it('listArray 0.elemanının içerisinde marked degişkeni bulunur.', () => 
  {
    assert.equal(appWrapper.state().listArray[0].marked,"seçildi");
  });     
  
  //Arrayın içerisine eleman atılıp denenmesi
  appWrapper.state().listArray.push({
    definations:"deneme2",
    marked:"seçildi2"
  });

  it('listArray 1.elemanının içerisinde definations degişkeni bulunur.', () => 
  {
    assert.equal(appWrapper.state().listArray[1].definations,"deneme2");
  });      
  it('listArray 1.elemanının içerisinde marked degişkeni bulunur.', () => 
  {
    assert.equal(appWrapper.state().listArray[1].marked,"seçildi2");
  });   

});

//div içinde 2 element bulunmalıdır.
/*describe('<App Componentini />', () => {
  // 1 adet Form componenti bulunmalıdır.

  var appWrapper = mount(<App />);

  assert.equal(appWrapper.state.counter,0);

 /* it('Form elementi bulunmaktadır', () => 
  {
    expect(appWrapper.find(Form)).to.have.lengthOf(1);

  });    

});*/

describe('<App Componentini addTask />', () => {
  // 1 adet Form componenti bulunmalıdır.
  const appWrapper = shallow(<App />);

  expect(appWrapper.addTask()).to.have.lengthOf(1);

});

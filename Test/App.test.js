import assert from 'assert';
import * as React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App/App';
import Form from '../src/Form/Form';
import { expect } from 'chai';
import List from '../src/List/List';
import sinon from 'sinon';



import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme';

import Adapter from'enzyme-adapter-react-16';
import { format } from 'util';
 configure({adapter: new Adapter()});
const {JSDOM} = require('jsdom');
const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const {window}= jsdom;

global.sinon = sinon;


function copyProps(src, target)
{
  const props = Object.getOwnPropertyNames(src)
  .filter(prop => typeof target[prop] === 'undefined')
  .map(prop => Object.getOwnPropertyDescriptor(src,prop));
  Object.defineProperties(target,props);
}
global.window =window;
global.document=window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window,global);
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
  appWrapper.setState({
    listArray:[{
      key:2,
      definations:"açıklama",
      marked:"seçildi"
    }]
  })

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
    key:2,
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
  /*addTask(task)
  {
    const{listArray}=this.state.listArray;
    listArray.push(task);
      
  }
  addSubmit(e)
  {
    e.preventDefault();
    this.props.addTask (
      {
        ...this.state
      }
    );
  }*/
  // 1 adet Form componenti bulunmalıdır.
  const appWrapper = mount(<App />);

  //const formWrapper = shallow(<App />);
  //expect(appWrapper.find(Form).render().find('.in-foo')).to.have.lengthOf(1);
  //expect(appWrapper.addTask()).to.have.lengthOf(1);
  /*appWrapper.setState({task:""});
  assert.equal(appWrapper.state().task,"");
  appWrapper.setState({task:"denemetask"});
  assert.equal(appWrapper.state().task,"denemetask");*/


  appWrapper.find(Form).prop('addTask');
  //appWrapper.find(Form).find("input").text();

  //appWrapper.find("Form").render().find("button").simulate('click');
  /*appWrapper.find("Form").state(
    {
      deneme:"deneme oldu"
    }
  )*/
  console.log(" Veri girilmeden önce " +appWrapper.find("Form").state().definations);
  appWrapper.find("Form").find('input').simulate("change", { target: { value: "appdeneme" }})
  //appWrapper.find("Form").find('input').instance().value = "appdeneme";
  //appWrapper.find("Form").render().find('input').text();
  /*
    appWrapper.find("addTask()")
    appWrapper.find("Form").prop("addTask")
      appWrapper.find(Form)
      appWrapper.find("Form").find("input")
      appWrapper.find("Form").render().find('input').text()
      appWrapper.find("Form").render().find('input')
      appWrapper.find("Form").state()
      appWrapper.find("Form").render().find("button").simulate("click")
        appWrapper.find("Form").find('input').simulate("change", { target: { value: "formdenemestate" }})
  */
  appWrapper.find("Form").find("button").simulate("click");
  console.log(" Veri girildikten sonra " +appWrapper.find("Form").state().definations);

  assert.equal(appWrapper.find("Form").state().definations,"appdeneme");

  console.log(" Verinin App componentine gönderilmesi ");
  console.log(appWrapper.state().task);
  assert.equal(appWrapper.state().task,"appdeneme");
  //console.log(appWrapper.state());

  //assert.equal(appWrapper.state().task,"denemesi");

  //expect(wrapper.state(task)).to.equal("");


});

describe('<App Componentini getDeleteId />', () => {
  const appWrapper = mount(<App />);
  appWrapper.find(List).prop('getDeleteId');

  appWrapper.setState(
    {
      listArray:[]
    }
  );
  console.log(" Veri girilmeden önce id: " +appWrapper.find("List").state().id);

  appWrapper.setState(
    {
      listArray:[{
        key:10,
        definations:"deneme1",
        marked:"seçildi1"
      }]
    }
  );

  //appWrapper.find("List").render();
  appWrapper.find("List").find("button").simulate("click");
  console.log(" Veri girildikten sonra id: " +appWrapper.find("List").state().id);
  console.log(" App deki id: " +appWrapper.state().id);

  assert.equal(appWrapper.state().id,10);

});

describe('<App Componentini getMarkedId />', () => {
  const appWrapper = mount(<App />);
  appWrapper.find(List).prop('getMarkedId');

  appWrapper.setState(
    {
      listArray:[]
    }
  );
  console.log(" Veri girilmeden önce id: " +appWrapper.find("List").state().markedId);

  appWrapper.setState(
    {
      listArray:[{
        key:10,
        definations:"deneme1",
        marked:"seçildi1"
      }]
    }
  );

  //appWrapper.find("List").render();
  appWrapper.find("List").find("#deneme1").simulate("click");
  console.log(" Veri girildikten sonra id: " +appWrapper.find("List").state().markedId);
  console.log(" App deki id: " +appWrapper.state().markedId);

  assert.equal(appWrapper.state().markedId,10);

});

/******* WEB API *******/
describe('App Component', () => {
  it('calls componentDidMount', () => {
    sinon.spy(App.prototype, 'componentDidMount');
 
    const wrapper = mount(<App />);
    expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});
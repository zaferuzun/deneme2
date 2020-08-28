import assert from 'assert';
import * as React from 'react';
import ReactDOM from 'react-dom';
import List from '../src/List/List';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme';
import App  from  '../src/App/App';
import {sinon} from 'sinon';

import Adapter from'enzyme-adapter-react-16';
 configure({adapter: new Adapter()});
const {JSDOM} = require('jsdom');
const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const {window}= jsdom;

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
//<List Component Testleri />


//div içinde table elementleri bulunmalıdır.
describe('< List Componentini  />', () => {
  var listWrapper = shallow(<List/>);

  // 1 adet table elementi bulunmalıdır.
  it('table elementi bulunmaktadır', () => 
  {
    expect(listWrapper.find("table")).to.have.lengthOf(1);

  });
  /*
  // tr elementleri bulunmalıdır.
  it('tr elementi bulunmaktadır', () => 
  {
   
    assert(listWrapper.find('tr').length>0);
  });
  // td elementleri bulunmalıdır.
  it('td elementi bulunmaktadır', () => 
  {
    
    assert(listWrapper.find('td').length>0);

  });*/

});
describe('< List2 Componentini Props  />', () => {
      //App den gönderilecek veri
    var listArray=[{
      key:1,
      definations:"deneme",
      marked:"seçildi"
    }
    ];
    var listWrapper2 = mount(<List listArray ={listArray} />);

  it('App  props olarak listArray gelmelidir.', () => 
  {
    //console.log(listWrapper.includedProp.listArray[0].definations);
    assert.equal(listWrapper2.props().listArray[0].definations,"deneme");
    assert.equal(listWrapper2.props().listArray[0].key,1);
    assert.equal(listWrapper2.props().listArray[0].marked,"seçildi");


  });

    // listArray  kadar tr elementleri bulunmalıdır.
    it('tr elementi bulunmaktadır', () => 
    {
      
      assert.equal(listWrapper2.find('tr').length,1);
  
    });

    // listArray 2 katı  kadar td elementleri bulunmalıdır.
    it('td elementi bulunmaktadır', () => 
    {
      
      assert.equal(listWrapper2.find('td').length,3);
  
    });
    it('button elementi bulunmaktadır', () => 
    {
      
      assert.equal(listWrapper2.find('button').length,1);
  
    });
    it('button elementi *Sil* dir bulunmaktadır', () => 
    {
      
      assert.equal(listWrapper2.find('button').text(),"Sil");
  
    });/*
    var listWrapper3 = mount(<App/>);

    
    it('button elementi valuesi taskid dir', () => 
    {
      listWrapper3.find("List").find('button').simulate("click")

      assert.equal(listWrapper3.state().id,1);
    });*/

/*
    listWrapper2.props().listArray.push({
      key:2,
      definations:"deneme2",
      marked:"seçildi2"
    });*/
/* 
    it('App Componentinden props olarak listArray gelmelidir.', () => 
    {
      //console.log(listWrapper.includedProp.listArray[0].definations);
      assert.equal(listWrapper2.props().listArray[1].definations,"deneme2");
      assert.equal(listWrapper2.props().listArray[1].key,2);
      assert.equal(listWrapper2.props().listArray[1].marked,"seçildi2");
  
  
    });*/
/*
    listWrapper2.props().listArray.push({
      key:2,
      definations:"deneme2",
      marked:"seçildi2"
    });
  
    //props geliyor lakin render edilmiyor çöz

    // listArray  kadar tr elementleri bulunmalıdır.
    it('tr elementi bulunmaktadır', () => 
    {
      
      assert.equal(listWrapper2.find('tr').length,2);
  
    });

    // listArray 2 katı  kadar td elementleri bulunmalıdır.
    it('td elementi bulunmaktadır', () => 
    {
      
      assert.equal(listWrapper2.find('td').length,4);
  
    });*/

});
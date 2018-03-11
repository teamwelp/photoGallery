import React from 'react';
import Enzyme from 'enzyme';
import App from '../client/src/index.jsx';
import PictureList from '../client/src/components/PictureList';
import PictureModal from '../client/src/components/PictureModal';
import { shallow } from 'enzyme';

describe('test methods in client index', ()=>{
  test('expect seeFourPhotos to change state with array of four objects', ()=> {
    const wrapper = shallow( <App/> ); 
    const list = [{one: 'one'}, {two: 'two'}, {three: 'three'}, {four: 'four'}, {five: 'five'}, {six: 'six'}];
    wrapper.instance().seeFourPhotos(list);
    expect(wrapper.state().seeFourPhotos).toEqual(list.slice(2));
  });

  test('expect limitCaptionLength to change state with array of four caption with ellipsis', ()=> {
    const wrapper = shallow( <App/> ); 
    const list = [{caption: '0123456789012345678123456789012345678901'}, {caption: 'two'}];
    wrapper.instance().limitCaptionLength(list);
    expect(wrapper.state().list[0].shortCaption.length).toEqual(38);
  });

  test('expect limitCaptionLength to change state with array of four caption with same caption', ()=> {
    const wrapper = shallow( <App/> ); 
    const list = [{caption: '0123456789012345678123456789012345678901'}, {caption: 'two'}];
    wrapper.instance().limitCaptionLength(list);
    expect(wrapper.state().list[1].shortCaption.length).toEqual(3);
  });

  test('expect close Modal', ()=> {
    const wrapper = shallow( <App/> ); 
    wrapper.instance().closeModal();
    expect(wrapper.state().display).toEqual('none');
  });

  test('expect ', ()=> {
    const wrapper = shallow( <App/> ); 
    const childWrapper = wrapper.find(PictureList)
    expect(childWrapper.props().list.length).toEqual(3);
  });

  test('expect ', ()=> {
    const wrapper = shallow( <App/> ); 
    const childWrapper = wrapper.find(PictureModal)
    expect(childWrapper.props().listAndUsers).toExist;
  });

  test('expect ', ()=> {
    const wrapper = shallow( <App/> ); 
    const childWrapper = wrapper.find(PictureModal)
    expect(childWrapper.props().display).toExist;
  });

  test('expect ', ()=> {
    const wrapper = shallow( <App/> ); 
    const childWrapper = wrapper.find(PictureModal)
    expect(childWrapper.props().closeModal).toExist;
  });

});
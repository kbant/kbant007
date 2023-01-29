import {Button} from '@kbant/app';
import {storiesOf} from '@storybook/react-native';
import {Text, View} from 'react-native';
import CenterView from '../CenterView';

storiesOf('Button App', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Primary Button', () => (
    <Button text="Hello World" color="green" textColor="white" />
  ));

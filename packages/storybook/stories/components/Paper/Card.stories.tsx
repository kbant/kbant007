import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { StyleSheet, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { PaperCard } from '@kbant/app';

const styles = StyleSheet.create({
  container: { width: 480 },
});

export default {
  component: PaperCard,

  render: args => (
    <PaperProvider theme={DefaultTheme}>
      <View style={styles.container}>
        <PaperCard {...args} />
      </View>
    </PaperProvider>
  ),
} as ComponentMeta<typeof PaperCard>;

export const Basic: ComponentStoryObj<typeof PaperCard> = {
  args: {
    content: 'Cillum sit aute cillum velit occaecat adipisicing aliquip sit ex quis ut dolor.',
    title: 'Card title',
  },
};

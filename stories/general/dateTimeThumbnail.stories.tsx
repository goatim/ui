import { DateTimeThumbnail } from '../../src/general/dateTimeThumbnail';

export default {
  title: 'General/DateTimeThumbnail',
  component: DateTimeThumbnail,
  argTypes: {},
};

function Template() {
  return (
    <DateTimeThumbnail
      label="Coup d'envoi"
      dateTime="2022-08-29T09:54:52.696+02:00"
      size="medium"
      countdown
      align="center"
      theme="dark"
    />
  );
}

export const Default = Template.bind({});

// A labelled input, single-line and multiline. On macOS the label should
// name the text field that VoiceOver and other accessibility clients reach.
import { mount, Text, View } from "nsh";
import { Input } from "nsh/base";

const field = { height: 30, paddingHorizontal: 8, borderWidth: 1, borderColor: "#d0d7de", borderRadius: 6 };

function App() {
  return (
    <View style={{ flex: 1, padding: 24, gap: 12 }}>
      <Text>Network name</Text>
      <Input accessibilityLabel="Network name" defaultValue="home" style={field} />
      <Text>Notes</Text>
      <Input accessibilityLabel="Notes" multiline defaultValue="Some notes" style={{ ...field, height: 80 }} />
    </View>
  );
}

mount(App);

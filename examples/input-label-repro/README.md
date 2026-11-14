# Input label repro

A labelled `Input` on macOS: its label goes on the input's view, not on the
`NSTextField` (or `NSTextView`) inside it, which is the element VoiceOver and
accessibility clients reach. So the field reads as an unnamed text field
inside a group named "Network name".

## Steps

```bash
cargo run -p nsh-cli -- run examples/input-label-repro
```

Then look at the window with Accessibility Inspector, or with
agent-desktop:

```bash
agent-desktop snapshot --app "Input Label Repro" -i --compact
agent-desktop find --app "Input Label Repro" --role textfield --name "Network name"
```

Expected: two text fields, named "Network name" and "Notes".

Actual: a group named "Network name" holding a text field with no name, the
same for "Notes", and the `find` above matches nothing.

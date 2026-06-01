# Deferred Work

## Contact Flow

- The contact form is intentionally static: the button does not submit or persist a request. Add a real submission lifecycle as a separate functional story with success, validation, failure, and retry states.
- Contact input values are currently stored by translated field label. Switching locale after entering values changes the keys and appears to clear the form. Introduce locale-independent field identifiers when the contact form becomes functional.

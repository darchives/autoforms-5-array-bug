
How to reproduce bug
====================

1. Clone this repo and run ```meteor``` in the directory.
2. Open the page up in your browser.
3. Ensure that there is more than one item in the autoform array.
4. Remove any item **other than the last item**
5. Click 'save'

Behavior
=========

Items that were removed from the array were replaced by null entries.
These null entries are rendered as empty elements.

Expected Behavior
=================

Items that are removed by the autoforms should be removed in the database, and not rendered as empty elements.

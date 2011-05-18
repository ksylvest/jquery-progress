# jQuery Progress

Progress is a jQuery plugin designed to provide simple progress bars. The progress bars support animated overlapping images.

## Installation

To install copy the *images*, *javascripts*, and *stylesheets* directories into your project and add the following snippet to the header:

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js" type="text/javascript"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.13/jquery-ui.min.js" type="text/javascript"></script>
    <script src="javascript/jquery.progress.js" type="text/javascript"></script> 
    <link href="stylesheets/style.css" rel="stylesheet" type="text/css" />
  
## Examples

Setting up a progress bar is easy. The following snippet is a good start:
    
    <div class="progress">
      <div class="outer"><div class="inner"></div></div>
    </div>

    <script type="text/javascript">
      $('.progress').progress({ percent: 1.0, duration: 3200 });
    </script>

## Copyright

Copyright (c) 2010 - 2011 Kevin Sylvestre. See LICENSE for details.

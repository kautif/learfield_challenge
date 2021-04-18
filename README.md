# Best Sports (Learfield Challenge)

<h2>Demo</h2>
<a href="https://kautif.github.io/learfield_challenge/" target="_blank">View Live</a>

<h2>Tech Stack</h2>
<ul>
    <li>HTML</li>
    <li>SASS/CSS</li>
    <li>JavaScript</li>
    <li>jQuery</li>
</ul>

<h2>Purpose</h2>
<p>Build a menu from a mockup that Learfield provided. Match the desktop and mobile desktop mockup and feature requirements. Hovering over Teams should reveal a dropdown with Men's Sports and Women's Sports each taking of 50% of the width. When mouse leaves dropdown, dropdown should disappear. Also, Navigation item should highlight according to the one that is hovered.</p>
<p>Mobile menu is accessible at less than 1024px. Mobile menu icon is represented by a hamburger icon. Slides down when clicked and hamburger icon is replaced with close button. Slides back up when close button is clicked. Teams has another dropdown which reveals its respective items. Down arrow for Teams changes to up arrow when menu is collapsed and vice versa when no longer collapsed.</p>

<h2>Screenshots</h2>

<h3>Desktop</h3>

Initial state of navigation
<img src="https://user-images.githubusercontent.com/22201101/115160751-2d725a80-a057-11eb-8004-7a628e804736.png" alt="initial navigation" />

Hovering over Teams
<img src="https://user-images.githubusercontent.com/22201101/115160780-5692eb00-a057-11eb-977b-64c61ceac257.png" alt="hovering over teams" />

Initial state of mobile
<img src="https://user-images.githubusercontent.com/22201101/115160841-935ee200-a057-11eb-80df-bd3b09cb0587.png" alt="initial mobile navigation" />

Opening mobile menu
<img src="https://user-images.githubusercontent.com/22201101/115160912-dd47c800-a057-11eb-93fd-72b5047160d5.png" alt="opening mobile menu" />

Opening Teams in mobile
<img src="https://user-images.githubusercontent.com/22201101/115160935-0a947600-a058-11eb-98ab-bcf9b05b3988.png" alt="teams in mobile" />

<h2>Issues</h2>
<ol>
    <li>Using the font style specified, but font style in the mockup looks a little compressed vertical-wise. When I use Roboto, it doesn't look compressed like in the mockup</li>
    <li>In desktop, when mouse is hovered over Teams and then to the left of Teams, Teams dropdown will not disappear</li>
    <li>In mobile, mathematically, the mobile menu is as long as it should be however, I don't think it's ideal that it's current height causes some scrolling to appear</li>
</ol>

<h2>Other Notes</h2>
<p>I'm not classifying this as an issue because under normal usage, a user will not be switching from desktop to mobile or vice versa on the same device. If you test desktop and then switch to mobile view, the mobile menu will not extend to the bottom. But, if you refresh while in a view less than 1024px, it will extend to the bottom as expected.</p>
<p>Likewise, if you were testing mobile, and then switched to desktop, it will show the Teams dropdown halfway down the page. If you refresh while in a desktop view, that will not be the case.</p>
<p>Both of these behaviors are due to me setting the body to be 100vh, but only if a user has a screen size of less than 1024px. This is done to calculate the height that the mobile menu should be and then applying that height.</p>

# learn : ukulele

"learn : ukulele" is a practical resource for ukulele players as well as those new to the instrument. The site features a ukulele chord library with clickable audio playback of individual chords.



![Alt text](images/random-practice.png?raw=true)

![Alt text](images/chord-library.png?raw=true)



## features

- Random practice - - On the landing page, a randomly chosen chord is displayed for individual chord practice.

- Chord library - - When a user clicks on the chord icon at the top of the page, a chord library is displayed, organized by key and by numeral. Users select a specific key combination (e.g. G, major) to view a specific family of chords.

- Chord playback - - Each chord is clickable and plays audio of a real ukulele strum.



## build

- Canvas - - Each chord is drawn plotting corresponding lines and arcs

- Tone.JS - - Used for audio playback

- PatchArena - - Finger-plucked ukulele wav files

- Slick - - Chord carousel with swipe capability


## add a chord

You can add a new ukulele chord, as long as the chord position is within the first four frets of the ukulele.

#### steps

- In app.js, add a new object to the chord library array (ukuApp.chordLibrary).

- For the key value of "rootNum" map the root of the chord to the appropriate number where C -> 0, C# -> 1, D -> 2, ... , B -> 11.

- For the isMinor key value put 'false' if the chord is minor or diminished, or 'true' if the chord is major.

- For the extension key value call one of the functions at the top of app.js, or put an empty string if the chord is a plain triad (D major, D minor). For example, a C major 7 would have "extension: maj7()", and a G suspended 4 would have "extension: sus(4)".

- For the fingering key put in a 4-dimensional array of integers with a range of 0 to 4 where each element represents the fret where you would place a finger on the ukulele (0 being an open string, 4 being the fourth fret). The first element of the array is for the G string, the second for the C string, the third for the E string, and the fourth for the A string.



"learn : ukulele" was created by Monika [monika.zarako@gmail.com] and Jason [j@jasondobrowner.com].

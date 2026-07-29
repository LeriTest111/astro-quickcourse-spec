# Multimedia Patterns

Multimedia patterns use local media, native HTML video controls and no third-party player library. Standard Video and Video with Chapters are currently prepared for Visual Design and Instructional Design review. Other video patterns remain Draft or Concept for later review.

## Shared Video Policy

Use the native `<video>` element with `controls`, `preload="metadata"` and no autoplay. Do not loop or mute-autoplay by default, do not hide native controls, and do not automatically enter fullscreen.

The shared player requests `controlslist="nodownload"` and `disablepictureinpicture` so browsers can hide Download and Picture-in-Picture where they support those native-control restrictions. Browser support varies, so do not claim every browser will show an identical menu. Playback speed and fullscreen remain controlled by the browser.

Production videos require accurate captions and a transcript. The reusable player supports caption tracks through WebVTT files, but this Showcase does not invent full captions for the Big Buck Bunny sample.

Poster images are optional, but strongly recommended when the opening frame is black, blank or visually unsuitable. A 16:9 poster around 1280 x 720 is a suitable default for 16:9 video. WebP or a sensibly compressed JPEG is preferred for production, with essential titles and instructions kept in real page text outside the image.

When no poster is supplied, the native browser fallback is used. This Showcase does not implement one-second poster extraction, runtime canvas frame capture, FFmpeg processing or build-time poster generation. Automatic poster generation may be considered later as part of the course-generation or build workflow.

The Standard Video Showcase example demonstrates optional poster behaviour with a normal local mountain image and no baked-in fake play control. Video with Chapters still accepts the same poster prop, but its Showcase controls focus on chapter content rather than poster comparison.

Local media should live under `public/media/` or another approved local asset path. Remote video URLs should not be used for static or SCORM-compatible Quick Course delivery unless the project team approves that hosting model.

## Standard Video

Approval status: In Review

Purpose: provide a simple responsive video section suitable for most Quick Courses.

Recommended use: short lesson videos, introductions, brand messages, focused demonstrations and scenario clips where internal navigation is unnecessary.

Content structure or props: optional heading, intro, video source, title, poster, caption and caption tracks.

Interaction behaviour: native controls only; no autoplay. Download and Picture-in-Picture are requested off through native attributes, with browser-dependent support.

Accessibility considerations: provide meaningful title text, captions and a transcript for production media.

Misuse to avoid: decorative background video or videos that start automatically.

## Video with Transcript

Approval status: Concept

Purpose: keep a searchable text alternative available without playing the video.

Recommended use: instructional video, scenario dialogue or any media where spoken or visual information must be available as text.

Interaction behaviour: transcript may be always visible or expandable with native `details` and `summary`.

Accessibility considerations: transcript text must remain selectable, searchable and available without JavaScript.

Misuse to avoid: adding a download link when no real transcript file exists or inventing inaccurate transcript text.

## Video with Chapters

Approval status: In Review

Purpose: let learners jump to meaningful points in a longer instructional video.

Content structure or props: video source and chapter items with title, start time and optional description.

Interaction behaviour: chapter buttons set `video.currentTime` and keep native playback controls available. Selecting a chapter preserves the learner's current play or pause state. The active chapter updates as the video plays or seeks backwards.

Chapter descriptions are optional per chapter. Missing, empty or whitespace-only descriptions render no description element and leave no reserved blank space. Real production videos may mix chapters with and without descriptions. The Showcase Preview Option demonstrates `Title only` and `Title and description` treatments without making either a production-wide display mode.

Responsive behaviour: the video and chapter panel sit side by side on wider screens. Long chapter lists scroll inside the chapter panel while the heading remains visible. On mobile, the chapter panel stacks below the video and uses a practical internal scroll area.

Accessibility considerations: chapter controls are real buttons with visible timestamps, clear accessible names, visible focus states and an active state that is not communicated by colour alone. Chapter navigation does not replace captions, transcripts or audio description where required.

Misuse to avoid: replacing native controls with a complex custom player, using chapter timestamps outside the actual media duration or using vague chapter titles such as `Part 1`.

# Multimedia Patterns

All video patterns are marked `In Review` until the project team approves them. They use local media, native HTML video controls and no third-party player library.

## Shared Video Policy

Use the native `<video>` element with `controls`, `preload="metadata"` and no autoplay. Do not loop or mute-autoplay by default, do not hide native controls, and do not automatically enter fullscreen.

Production videos require accurate captions and a transcript. The reusable player supports caption tracks through WebVTT files, but this Showcase does not invent full captions for the Big Buck Bunny sample. Poster image support is included in the API; no poster frame was extracted in this environment.

Local media should live under `public/media/` or another approved local asset path. Remote video URLs should not be used for static or SCORM-compatible Quick Course delivery unless the project team approves that hosting model.

## Standard Video

Approval status: In Review

Purpose: provide a simple responsive video section suitable for most Quick Courses.

Recommended use: short lesson videos, demonstrations and scenario clips.

Content structure or props: optional heading, intro, video source, title, poster, caption and caption tracks.

Interaction behaviour: native controls only; no autoplay.

Accessibility considerations: provide meaningful title text, captions and a transcript for production media.

Misuse to avoid: decorative background video or videos that start automatically.

## Video with Supporting Text

Approval status: In Review

Purpose: pair a video with concise context, instructions or key points.

Recommended use: tell learners what to watch for before they play a clip.

Responsive behaviour: text and video sit side by side on wider screens and stack on mobile with the introduction before the video.

Misuse to avoid: placing long reading content beside a small video.

## Video with Transcript

Approval status: In Review

Purpose: keep a searchable text alternative available without playing the video.

Recommended use: instructional video, scenario dialogue or any media where spoken or visual information must be available as text.

Interaction behaviour: transcript may be always visible or expandable with native `details` and `summary`.

Accessibility considerations: transcript text must remain selectable, searchable and available without JavaScript.

Misuse to avoid: adding a download link when no real transcript file exists or inventing inaccurate transcript text.

## Video with Chapters

Approval status: In Review

Purpose: let learners jump to meaningful points in a longer instructional video.

Content structure or props: video source and chapter items with title, start time and optional description.

Interaction behaviour: chapter buttons set `video.currentTime` and keep native playback controls available. Selecting a chapter does not autoplay the video.

Accessibility considerations: chapter controls are real buttons with visible timestamps and selected state.

Misuse to avoid: replacing native controls with a complex custom player or using chapter timestamps outside the actual media duration.

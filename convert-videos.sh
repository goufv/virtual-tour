#!/bin/bash

# Generates WebM and MP4
# See: https://gist.github.com/jaydenseric/220c785d6289bcfd7366

rm -rf dist/videos
mkdir dist/videos

for i in videos/*.mp4
do
  # Generate cover image
  # ffmpeg -i $i -vframes 1 -vf scale=720:-2 -q:v 1 ${i%}jpg
  # Generate MP4
  ffmpeg -i $i -c:v libx264 -pix_fmt yuv420p -profile:v baseline -level 3.0 -crf 22 -preset veryslow -vf scale=720:-2 -movflags +faststart -threads 0 dist/${i%"mp4"}mp4
  # Generate WebM
  ffmpeg -i $i -c:v libvpx -qmin 0 -qmax 25 -crf 4 -b:v 1M -vf scale=720:-2 -threads 0 dist/${i%"mp4"}webm
done



# ffmpeg -i WEBSITE_CapuletAnimation-FINALREV_2.mp4 -c:v libx264 -pix_fmt yuv420p -profile:v baseline -level 3.0 -crf 22 -preset veryslow -vf scale=1600:-2 -movflags +faststart -threads 0 WEBSITE_CapuletAnimation-FINALREV_2_1600.mp4
# ffmpeg -i WEBSITE_CapuletAnimation-FINALREV_2.mp4  -c:v libvpx -qmin 0 -qmax 25 -crf 4 -b:v 1M -vf scale=1600:-2 -c:a libvorbis -threads 0 -pass 2 WEBSITE_CapuletAnimation-FINALREV_2_1600.webm
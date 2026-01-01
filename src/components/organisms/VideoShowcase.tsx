import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import VideoPlayer from '../molecules/VideoPlayer'

interface Video {
  id: string
  title: string
  description: string
  thumbnail: string
  videoSrc: string
}

export default function VideoShowcase() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)

  const videos: Video[] = [
    {
      id: '2',
      title: 'Bathtub Transformation',
      description: 'Watch us transform a worn bathtub into a like-new surface',
      thumbnail: '/images/2_before.jpg',
      videoSrc: '/videos/video2.mp4',
    },
    {
      id: '6',
      title: 'Professional Reglazing Process',
      description: 'See our expert reglazing technique in action',
      thumbnail: '/images/1_before.jpg',
      videoSrc: '/videos/video6.mp4',
    },
    {
      id: '7',
      title: 'Complete Restoration',
      description: 'Full bathroom reglazing from start to finish',
      thumbnail: '/images/3_before.jpg',
      videoSrc: '/videos/video7.mp4',
    },
  ]

  return (
    <>
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title text-white mb-4">Watch Our Work</h2>
              <p className="text-xl text-gray-100 max-w-3xl mx-auto font-jost">
                See real transformations from our recent projects. Watch Jorge and his team bring
                bathtubs and kitchens back to life.
              </p>
            </motion.div>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                  {/* Thumbnail */}
                  <div className="relative aspect-[9/16] overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-navy-900/60 group-hover:bg-navy-900/40 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-white/90 group-hover:bg-white group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-2xl">
                        <svg
                          className="w-10 h-10 text-navy-900 ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-6 bg-gradient-to-b from-gray-900 to-navy-900">
                    <h3 className="text-xl font-orbitron font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-300 font-jost text-sm">{video.description}</p>
                    <div className="mt-4 inline-flex items-center text-blue-400 font-jost text-sm font-semibold group-hover:gap-3 gap-2 transition-all">
                      <span>View Video</span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA - Updated to "See More Projects" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <a
              href="/gallery"
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-navy-900 px-8 py-4 rounded-lg font-jost font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              See More Projects
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Video Modal with HTML5 Video Player */}
      <AnimatePresence>
        {selectedVideo && (
          <VideoPlayer
            src={selectedVideo.videoSrc}
            poster={selectedVideo.thumbnail}
            title={selectedVideo.title}
            onClose={() => setSelectedVideo(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AnimeCard from '~/components/AnimeCard.vue'

const mockAnime = {
  id: 999,
  title: {
    romaji: 'Cowboy Bebop',
    english: 'Cowboy Bebop',
    native: 'カウボーイビバップ',
  },
  coverImage: {
    large: 'https://example.com/cover-large.jpg',
    medium: 'https://example.com/cover-medium.jpg',
    color: '#1a5f8a',
  },
  bannerImage: null,
  description: 'A ragtag crew of bounty hunters chases down criminals across the solar system.',
  episodes: 26,
  genres: ['Action', 'Adventure', 'Sci-Fi'],
  averageScore: 92,
  format: 'TV',
  status: 'FINISHED',
  season: 'SPRING',
  seasonYear: 1998,
}

describe('AnimeCard', () => {
  it('renders the anime title from props', () => {
    const wrapper = mount(AnimeCard, {
      props: {
        anime: mockAnime,
      },
    })

    expect(wrapper.text()).toContain('Cowboy Bebop')
  })

  it('displays the score with correct color coding', () => {
    const wrapper = mount(AnimeCard, {
      props: {
        anime: mockAnime,
      },
    })

    const scoreBadge = wrapper.find('.bg-green-500')
    expect(scoreBadge.exists()).toBe(true)
    expect(scoreBadge.text()).toContain('92')
  })

  it('shows genre pills', () => {
    const wrapper = mount(AnimeCard, {
      props: {
        anime: mockAnime,
      },
    })

    expect(wrapper.text()).toContain('Action')
    expect(wrapper.text()).toContain('Adventure')
    expect(wrapper.text()).toContain('Sci-Fi')
  })
})

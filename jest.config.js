module.exports = {
  verbose: false,
  transform: {
    '.(js|ts)': 'ts-jest'
  },
  coverageReporters: ['text', 'lcov'],
  roots: ['<rootDir>/tests/'],
  coverageDirectory: '<rootDir>/coverage',
  moduleNameMapper: {
    '^~(.*)$': '<rootDir>/src/$1',
    '^tests(.*)$': '<rootDir>/tests/$1'

  },
  preset: 'ts-jest'
}

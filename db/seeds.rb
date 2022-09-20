topics = ['Movie', 'Suggestion', 'Unrelated', 'Discussion', 'Horror Related']

topics.map { |topic| Topic.create(title: topic)}
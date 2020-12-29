import { PostInterface, Posts } from "../models/posts";

function createDumbPost(
  {
    header = 'test header',
    tags = ['one', 'two'],
    image = '/path/to/image.jpg',
    readTime = 1,
    description = 'test description',
    pid = String(Math.random()),
    time = Date.now(),
    preview = [],
    full = []
  }
): PostInterface {
  return { header, pid, full, preview, description, readTime, image, tags, time };
}

test('length', () => {
  const p = new Posts();
  expect(p.length()).toBe(0);
  for (let i = 1; i < 100; i++) {
    p.addPost(createDumbPost({ pid: String(i) }))
    expect(p.length()).toBe(i)
  }
});

test('addPost should throw exception when adding post with similar pid', () => {
  const p = new Posts();
  p.addPost(createDumbPost({ pid: 'test' }))
  expect(
    () => p.addPost(createDumbPost({ pid: 'test' }))
  ).toThrow(new Error(`post with id: test already exists`));
});

test('get post by pid', () => {
  const p = new Posts();
  const post = createDumbPost({});
  p.addPost(post);
  expect(p.getPost(post.pid)).toEqual(post);
})

test('getAll', () => {
  const p = new Posts();
  for (let i = 0; i < 10; i++) {
    p.addPost(createDumbPost({ pid: String(i) }))
  }
  const a = p.getAll();
  expect(a).toHaveLength(p.length());
  for (let i = 1; i < 10; i++) {
    expect(a[ i - 1 ].time).toBeGreaterThanOrEqual(a[ i ].time)
  }
});

test('getPage', () => {
  const p = new Posts();
  for (let i = 0; i < 10; i++) {
    p.addPost(createDumbPost({ pid: String(i), time: i }))
  }

  const page = p.getPage({ limit: 2, offset: 0 });

  expect(page).toMatchObject({
    limit: 2,
    offset: 0,
    total: 10,
    totalPages: 5,
    currentPage: 1,
  });

  expect(page.posts[ 0 ].time).toEqual(9);
  expect(page.posts[ 1 ].time).toEqual(8);
});

test('get tag page', () => {
  const p = new Posts();
  p.addPost(createDumbPost({ tags: ['test'], pid: 'test' }))
  for (let i = 0; i < 10; i++) {
    p.addPost(createDumbPost({ pid: String(i), time: i }))
  }

  const page = p.getPage({ limit: 2, offset: 0, tag: 'test' });

  expect(page).toMatchObject({
    limit: 2,
    offset: 0,
    total: 1,
    totalPages: 1,
    currentPage: 1,
  });

  expect(page.posts[0].pid).toEqual('test')
})

import { NextPage } from "next";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { XIcon } from "@heroicons/react/outline";
import List from "../components/list";
import CachedData from "../src/external/cache/blog.json";

const Search: NextPage = () => {
  const [word, setWord] = useState("");
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  const [results, setResults] = useState<any>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newWord = event.currentTarget.value;
    setWord(newWord);
    if (timer) {
      clearTimeout(timer);
    }
    if (newWord !== "") {
      const newTimer = setTimeout(() => {
        search(newWord);
      }, 300);
      setTimer(newTimer);
    } else {
      setResults([]);
    }
  };

  const search = (newWord: string) => {
    const filteredCacheData = CachedData.CachedData.filter((metaData: any) =>
      metaData.title.includes(newWord)
    );
    filteredCacheData.sort((a, b) => b.id - a.id);
    setResults(filteredCacheData);
  };

  const onClear = () => {
    if (word !== "") {
      setWord("");
      setResults([]);
    }
    inputRef.current?.focus();
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    (document.activeElement as HTMLElement).blur();
  };

  return (
    <>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={onSubmit}
      >
        <div className="relative">
          <input
            className="py-1 pl-2 pr-8 rounded-md text-gray-800 w-60"
            type="text"
            placeholder="검색어를 입력하십시오"
            value={word}
            onChange={onChange}
            autoFocus={true}
            ref={inputRef}
          />
          <XIcon
            className="h-8 p-1 text-gray-300 absolute top-0 right-0 cursor-pointer"
            onClick={onClear}
          />
        </div>
      </form>

      {results.length > 0 ? (
        <List list={results} />
      ) : (
        <div className="px-5 my-10 flex justify-center items-center">
          <span>검색결과가 존재하지 않습니다.</span>
        </div>
      )}
    </>
  );
};

export default Search;

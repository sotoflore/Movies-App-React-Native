import { Text, View } from "react-native";
import { useMovies } from "../../hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { PosterCarousel } from "../../components/movies/PosterCarousel";
import { HorizontalCarousel } from "../../components/movies/HorizontalCarousel";
import { FullScreenLoader } from "../../components/loaders/FullScreenLoader";

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    const { isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage } = useMovies();

    if (isLoading) {
        return <FullScreenLoader />
    }

    return (
        <ScrollView>
            <View style={{ marginTop: top + 20, paddingBottom: 30 }}>

                {/* Principal */}
                <PosterCarousel movies={nowPlaying} />

                {/* Populares */}
                <HorizontalCarousel movies={popular} title="Populares" loadNextPage={popularNextPage}/>
                
                {/* topRated */}
                <HorizontalCarousel movies={topRated} title="Mejor Calificadas" />

                {/* upcoming - proximamente */}
                <HorizontalCarousel movies={upcoming} title="Proximamente" />

            </View>
        </ScrollView>
    );
}